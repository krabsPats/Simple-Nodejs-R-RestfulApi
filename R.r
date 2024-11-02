library(httr)

url <- 'http://localhost:3000/api'

response <- tryCatch({
    GET(url)
}, error = function(e) {
    cat('Error occurred while trying to connect to the server:\n')
    cat(e$message, '\n')
    NULL 
})

if (!is.null(response)) {
    if (status_code(response) == 200) {
        data <- content(response, as = "parsed", type = "application/json")
        cat('Data:', data$message, '\n')
    } else {
        cat('HTTP error! Status:', status_code(response), '\n')
    }
} else{
    cat('Server Error', '\n')
}

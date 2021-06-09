import axios from "axios";
var ip = "132.72.67.188";
var port = "8020";

// upload flight log to the server's DB
export async function upload_flight(file, locationTags, parameters){
    console.log(parameters);
    var formData = new FormData();
    formData.append("file", file);
    formData.append("locationTags", locationTags);
    formData.append("parameters", JSON.stringify(parameters));

    return axios.post('http://' + ip + ':' + port + '/upload_flight', formData, 
    {
        headers: {
        'Content-Type': 'multipart/form-data'
        },
    })
    .then((response) => (response.data), (error) => {console.log(error)});
}



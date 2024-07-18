function ValidateUser(userName, password) {
    fetch('http://192.168.0.108:8000/database').then((response) =>{
        if(response.status == 200) {
            console.log("Connected!")
            console.log(response.text().then((value) => {
                console.log(value)
            }))
        }
    })
}

export default ValidateUser;
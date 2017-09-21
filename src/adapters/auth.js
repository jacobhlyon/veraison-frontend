class Auth {
  static login(userParams) {
    // console.log(userParams)
    const userJSON = JSON.stringify(userParams)
    const requestInfo = {
      method: 'POST',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    }

    return fetch('http://localhost:3000/api/v1/login', requestInfo)
      .then(res => {
        console.log(res.status)
        return res.json()
      })
      .catch(alert("You have an error"))
  }

  static signup(userParams) {
      console.log(userParams)
      const userJSON = JSON.stringify(userParams)
      const requestInfo = {
        method: 'POST',
        body: userJSON,
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      }

  }

  static me() {
    const jwtToken = localStorage.getItem("token")
    return fetch('http://localhost:3000/api/v1/me',{
      headers:{
        "Authorization":`Bearer ${jwtToken}`,
        "Accept":"application/json"
      }
    })
    .then(res => res.json())
  }


  static logOut() {
    localStorage.removeItem('token')
  }
}

export default Auth
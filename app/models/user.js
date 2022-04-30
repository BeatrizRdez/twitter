class User {  // Clase user 
    constructor(id, username, name, bio){  // Constructor:crear e inicializar un objeto creado a partir de una clase.
      this.id = id
      this.username = username
      this.name = name
      this.bio = bio
      this.dateCreated = new Date()
      this.lastUpdated = new Date()
    }
  
    get getUsername(){
      return this.username
    }
  
    get getBio(){
      return this.bio
    }
  
    get getDateCreated(){
      return this.dateCreated
    }
  
    get getLastUpdated(){
      return this.lastUpdated
    }
  
    set setUsername(newUsername){
      this.username = newUsername
    }
  
    set setBio(newBio){
      this.bio = newBio
    }
  }
  
  module.exports = User  
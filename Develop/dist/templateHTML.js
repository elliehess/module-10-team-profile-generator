//Create a function for the template HTML file for users input 

function generateCards(myTeam) {

    template = ``;
    
    myTeam.forEach(element => {
        if(element.getRole() === 'Manager'){ //will create Manager card if called
            template +=
            ` <div class =col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title-manager">${element.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted>${element.getRole()}</h6>        
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${element.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
            </div>`
            } else if(element.getRole() === 'Engineer') { //will create Engineer card if called
              template +=
              ` <div class =col">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title-engineer">${element.getName()}</h5>
                            <h6 class="card-subtitle mb-2 text-muted>${element.getRole()}</h6>        
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${element.getGithub()}" target="_blank">${element.getGithub()}</a></li>
                            </ul>
                        </div>
                     </div>
                </div>`
            } else if(element.getRole() === 'Intern'){ //will create Intern card if called
              template +=
              ` <div class =col">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title-intern">${element.getName()}</h5>
                            <h6 class="card-subtitle mb-2 text-muted>${element.getRole()}</h6>        
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                            <li class="list-group-item">School: ${element.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
           
            }
          });
    return template  
}



const generateHTML = (myTeam) => 
`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css"/>
  </head>
  
  <body> 
  <header>
        <div class = "container">
        <h1>Team Profile</h1>
        </div>
    </header>
    
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- Place holder for user generated team profile content -->
        ${generateCards(myTeam)}
         
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
   </body>
</html>`;

module.exports = generateHTML;
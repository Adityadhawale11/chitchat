import React from'react'



const Base=()=>{
  
  
    return(
        <footer class="page-footer " style={{backgroundColor:"#424242"}}>
          <div class="container center" >
            <div class="row">
              
                <h6 class="white-text">Designed and developed by</h6>
                <h6 class="cyan-text" style={{fontFamily:"cursive"}}>Aditya Dhawale</h6>
                <h6 class="grey-text" style={{fontFamily:"cursive"}}>(fullstack developer)</h6>
              </div>
              <div class="#424242">
                <p class="white-text" style={{fontFamily:"cursive"}}>Connect with :-</p>
                <ul>
                <a href="#" class="fa fa-facebook"></a>
                <a href="https://www.linkedin.com/in/aditya-dhawale-292860198" class="fa fa-linkedin"></a>
                  
                  <a href="#" class="fa fa-instagram"></a>
                  <a href="#" class="fa fa-twitter"></a>
                 
                </ul>
            
            </div>
          </div>
          <div class="footer-copyright grey">
            <div class="container center">
            ©Chit-chat,All rights reserved
           
            </div>
          </div>
        </footer>
    )
}
export default Base
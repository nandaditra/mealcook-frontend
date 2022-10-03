import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <div>
          <footer>
               <div className="row mx-1">
                  <div className="col-4">
                      <p>mealcook is a website which available some recipes of cookie from famous chefs work in best restaurant's in the world. In here, you can cook like restauran menu 5 start</p>
                  </div>

                  <div className="col-4">
                      <ul>
                         <li><a href="#">Home</a></li>
                         <li><a href="#">About</a></li>
                         <li><a href="#">Terms</a></li>
                         <li><a href="#">Privacy Policy</a></li>
                      </ul>
                  </div>                  
                  
                  <div className="col-4">
                      <ul>
                          <a href=""><FontAwesomeIcon icon="fa-brands fa-facebook" />fb</a>
                          <a href=""><FontAwesomeIcon icon="fa-brands fa-instagram" />ig</a>
                          <a href=""><FontAwesomeIcon icon="fa-brands fa-twitter" />twtter</a>
                          <a href=""><FontAwesomeIcon icon="fa-brands fa-tiktok" />tiktok</a>
                      </ul>
                  </div>
                </div>      
              <p>@copyright-2022 powered by hackntra technologies Ltd</p>
          </footer>
        </div>
    )
}
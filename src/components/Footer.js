import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <div>
          <footer>
             <p>mealcook is a website which available some recipes of cookie from famous chefs work in best restaurant's in the world. In here, you can cook like restauran menu 5 start</p>
 
             <ul>
               <li><a href={"#"}>Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Terms</a></li>
               <li><a href="#">Privacy Policy</a></li>
             </ul>

             <ul>
               <a href=""><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
               <a href=""><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
               <a href=""><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
               <a href=""><FontAwesomeIcon icon="fa-brands fa-tiktok" /></a>
             </ul>

             <p>@copyright-2022 powered by hackntra technologies Ltd</p>
          </footer>
        </div>
    )
}
import NewUsers from "./NewUsers";
import TopBar from "./TopBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const users = [
    {
      id: 1,
      img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      name: "Lelah Nichols",
      address: "Troy, MI",
      hobbies: ["clothes", "stem"],
    },
    {
      id: 2,
      name: "Jesus Weiss",
      img: "https://media.istockphoto.com/id/492529287/photo/portrait-of-happy-laughing-man.jpg?s=612x612&w=0&k=20&c=0xQcd69Bf-mWoJYgjxBSPg7FHS57nOfYpZaZlYDVKRE=",
      address: "Fort Worth, TX",
      hobbies: ["headset", "gadget", "speed", "winter"],
    },
    {
      id: 3,
      name: "Annie Rice",
      img: "https://t3.ftcdn.net/jpg/01/97/11/64/360_F_197116416_hpfTtXSoJMvMqU99n6hGP4xX0ejYa4M7.jpg",
      address: "Austin, TX",
      hobbies: ["road", "mountain", "trip", "earth", "nature"],
    },
    {
      id: 4,
      name: "Robert Brower",
      img: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
      address: "Cincinnati, OH",
      hobbies: ["Maintenance", "gears", "frames", "repair"],
    },
    {
      id: 5,
      name: "Amy Campbell",
      img: "https://media.istockphoto.com/id/1323497158/photo/beautiful-pretty-woman-holding-bottle-of-medical-pills-or-vitamins-casually-dressed-has-good.jpg?s=612x612&w=0&k=20&c=YfJ2htNjMDImixuDlC5sAV--NgitupvpjOm1USU3AGk=",
      address: "Warrior, AL",
      hobbies: ["music", "disks"],
    }
  ];
  
  const UsersList = users.map((user) => (
    <NewUsers key={user.id} img={user.img} name={user.name} address={user.address} hobbies={user.hobbies} />
  ));


export default function Container(){
    return<>   <Router>
        <div className="caontiner" >
           <TopBar/>
        <div className="newusers-container">

            <Routes>
 
    <Route path="/New-users" element={<>{UsersList}</>} />
    </Routes>
        </div>
        </div>
    </Router>
     

    
    
    
    
    </>



}
import PropTypes from 'prop-types';
  NewUsers.propTypes = {
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                address: PropTypes.string.isRequired,
                hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
            };
export default function NewUsers({name,img,address,hobbies}){
    return<>
     
            <div className="card-container">
                <img src={img} alt="pic-user" className="card-img"/>
                    <div className="info-div" >
                        <span id="name-font">{name}</span>
                        <span id="address-font">{address}</span>
                        <div className="hobbies">
                    {hobbies.map((hobby, index) => (
                        <span key={index} className="hobby">{hobby}</span>
                    ))}
                </div>
                    </div>
            </div>

      
    
    
    
          
    </>



}
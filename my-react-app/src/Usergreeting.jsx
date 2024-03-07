import PropTypes from 'prop-types';

function UserGreeting(props){

  const WelcomeMessage = <h2>Welcome {props.username} </h2>
  const LoginPrompt = <h2>poittu vaa</h2>
  return (props.isLoggedIn ? WelcomeMessage: LoginPrompt)
}

UserGreeting.Proptypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool
}
export default UserGreeting 



  //  if(props.isLoggedIn){
  //   return <h2>Welcome {props.username}</h2>
  //  }
  //  return <h2>Poi vaelaiya paaruda</h2>
import React from 'react';
import Footer from '../Footer/Footer';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  onEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  onPassChange = (e) => {
    this.setState({password: e.target.value});
  }

  onSubmitSignUp = () => {
    fetch('https://sheltered-beyond-43188.herokuapp.com/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if(user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
          <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
          <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <p className='underline pointer' onClick={() => onRouteChange('signin')}>Already have an Account? Sign in!</p>
                <legend className="f3 fw7 ph0 mh0">Sign Up</legend>
                <div className="mv4">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="text" 
                    name="name"  
                    id="name"
                    onChange={this.onNameChange} />
                </div>
                <div className="mv4">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address" 
                    id="email-address" 
                    onChange={this.onEmailChange}/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
                    name="password" 
                    id="password"
                    onChange = {this.onPassChange} />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignUp} 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent pointer hover-bg-black hover-white f6 dib" 
                  type="button" 
                  value="Let's Get Started" />
              </div>
            </form>
          </main>
        </article>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
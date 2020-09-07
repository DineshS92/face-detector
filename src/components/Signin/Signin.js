import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPass: '',
      message: ''
    }
  }

  onEmailChange = (e) => {
    this.setState({signInEmail: e.target.value});
  }

  onPassChange = (e) => {
    this.setState({signInPass: e.target.value});
  }

  onSubmitSignIn = () => {
    fetch('https://sheltered-beyond-43188.herokuapp.com/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPass
      })
    })
      .then(response => response.json())
      .then(user => {
        if(user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.setState({message: `Hmmm..Seems like you've got the wrong credentials`})
        }
      })
  }

  render() {
    const { onRouteChange } = this.props; 
    return (
      <article className="br3 ba b--black-10 mv4 mv5-ns mv5-m w-100 w-50-m w-25-l mw6 shadow-3 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw7 ph0 mh0">Sign In</legend>
              <div className="mt4">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address" 
                  id="email-address"
                  onChange={this.onEmailChange} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
                  name="password"  
                  id="password"
                  onChange={this.onPassChange} />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn} 
                className="b ph3 pv2 input-reset ba b--black bg-transparent pointer hover-bg-black hover-white f6 dib" 
                type="button" 
                value="Sign in" />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange('signup')}  
                className="underline f5 link fw5 dim black db pointer">Don't Have an Account? Sign Up for Free</p>
            </div>
          </form>
          <p className='fw6 ma0 mt2 dark-red'>{this.state.message}</p>
        </main>
      </article>
    );
  }
}

export default Signin;
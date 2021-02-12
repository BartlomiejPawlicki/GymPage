import React from "react";
import "../style/Form.css";

class ContactPage extends React.Component {
  state = {
    userName: "",
    userSurName: "",
    email: "",
    password: "",
    accept: false,

    errors: {
      userName: false,
      userSurName: false,
      email: false,
      password: false,
      accept: false,
    },
  };

  checkValue = {
    userName__incorrect: "Nazwa musi byc dłuższa niż 8 znakow i nie moze zawierać spacji",
    userSurName__incorrect: "Wpisz conajmniej 5 liter",
    email__incorrect: "email nie zawiera @",
    password__incorrect: "Hasło musi zawierać 7 znaków",
    accept__incorrect: "Nie wyraziłeś zgody",
  };

  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;

      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;

      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        userName: "",
        userSurName: "",
        email: "",
        password: "",
        accept: false,
        message: "Formularz został wysłany!",

        errors: {
          userName: false,
          userSurName: false,
          email: false,
          password: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          userName: !validation.userName,
          userSurName: !validation.userSurName,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        },
      });
    }
  };

  formValidation = () => {
    let userName = false;
    let userSurName = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (
      this.state.userName.length > 8 &&
      this.state.userName.indexOf(" ") === -1
    ) {
      userName = true;
    }

    if (this.state.userSurName.length > 5) {
      userSurName = true;
    }

    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }

    if (this.state.password.length === 7) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (userSurName && userName && email && password && accept) {
      correct = true;
    }
    return {
      correct,
      userName,
      userSurName,
      email,
      password,
      accept,
    };
  };

  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(
        () =>
          this.setState({
            message: "",
          }),
        3000
      );
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} noValidate className="form">
          <label htmlFor="userName">
            Wpisz swoję imię:
            <input
              type="text"
              value={this.state.userName}
              name="userName"
              id="userName"
              placeholder="Wpisz swoję imię"
              onChange={this.handleChange}
            />
            {this.state.errors.userName && (
              <span> {this.checkValue.userName__incorrect} </span>
            )}
          </label>
          <label htmlFor="userSurName">
            Wpisz swoję nazwisko:
            <input
              type="text"
              value={this.state.userSurName}
              name="userSurName"
              id="userSurName"
              placeholder="Wpisz swoję nazwisko"
              onChange={this.handleChange}
            />
            {this.state.errors.userSurName && (
              <span> {this.checkValue.userSurName__incorrect} </span>
            )}
          </label>
          <label htmlFor="password">
            Wpisz hasło:
            <input
              type="password"
              value={this.state.password}
              name="password"
              id="password"
              placeholder="Wpisz swoje hasło"
              onChange={this.handleChange}
            />
            {this.state.errors.password && (
              <span> {this.checkValue.password__incorrect} </span>
            )}
          </label>
          <label htmlFor="email">
            Wpisz email:
            <input
              type="email"
              value={this.state.email}
              name="email"
              id="email"
              placeholder="Wpisz swój email"
              onChange={this.handleChange}
            />
            {this.state.errors.email && (
              <span> {this.checkValue.email__incorrect} </span>
            )}
          </label>
          <label>
            Wpisz swój komentarz:
            <textarea name="textArea"></textarea>
          </label>
          <label className="check__label" htmlFor="accept">
            Potwierdzam danę
            <input
              className="check"
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            ></input>
            {this.state.errors.accept && (
              <span> {this.checkValue.accept__incorrect} </span>
            )}
          </label>

          <button className="button">Zatwierdź</button>
          {this.state.message && (
            <h3 className="confirm">{this.state.message}</h3>
          )}
        </form>
      </>
    );
  }
}

export default ContactPage;

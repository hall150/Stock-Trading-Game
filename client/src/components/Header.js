import React, {Component} from 'react';

class Header extends Component {
  render () {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
          <a class="navbar-brand" href="/">CyberTrader</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">About Us</a>
              <a class="nav-item nav-link" href="#">Tutorial</a>
              <a class="nav-item nav-link" href="#">Log in With Google</a>
              {/* add to class - disabled */}
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;

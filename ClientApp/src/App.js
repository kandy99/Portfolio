import React, { Component } from 'react';
import $ from 'jquery';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Blogs from "./components/Blogs";

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {}
        };

    }

    getResumeData() {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }



    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main} />
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Contact data={this.state.resumeData.main} />
                <Blogs data={this.state.resumeData.blogs} />

            </div>

            //  <Layout>

            //  <Route exact path='/' component={Home} />
            //  <Route path='/counter' component={Counter} />
            //  <Route path='/fetch-data' component={FetchData} />
            //</Layout>
        );
    }
}

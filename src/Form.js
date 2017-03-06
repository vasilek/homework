import React, { Component } from 'react';
import { Field, reduxForm,  formValueSelector } from 'redux-form';
import { connect  } from 'react-redux';
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Menu from './Menu';


import {
    // Checkbox,
    // RadioButtonGroup,
    // SelectField,
    TextField,
    // Toggle,
    // DatePicker
} from 'redux-form-material-ui'

const validate = values => {
    const errors = {};
    const requiredFields = [ 'firstName', 'lastName', 'login' ];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Required'
        }
    })
    // alert(errors);
    return errors
}


class Form extends Component {
    addPerson() {
        this.props.onAddPerson(this.props.fullName);
    }

    render(){


        const {handleSubmit, reset, pristine,submitting} = this.props;

        const submit = (values) => console.log(values);
        return (
        <MuiThemeProvider>


            <form onSubmit={handleSubmit(submit)}>
                <Menu />
                <div>
                <Field name="firstName" component={TextField}  type="text" placeholder="firstName"  />

            </div>
                <div>
                <Field name="lastName" component={TextField} type="text" placeholder="lastName" />
            </div>
                <div>
                <Field name="login" component={TextField} type="text" placeholder="login" />
            </div>
                <div>
                    <div>
                        <RaisedButton type="submit" disabled={pristine || submitting} onClick={this.addPerson.bind(this)}>Submit</RaisedButton>

                        <RaisedButton type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</RaisedButton>
                    </div>
                </div>
            </form>
        </MuiThemeProvider>
        );
    }
}




Form = reduxForm({
    form: 'post', // имя формы в state (state.form.post)
    validate
})(Form);

const selector = formValueSelector('post');

Form = connect(
            state => {
                const { firstName, lastName, login } = selector(state, 'firstName', 'lastName', 'login');

                return{
                    fullName: `${firstName || ''} ${lastName || ''} ${login || ''}`
                };
        },

    dispatch => ({

        onAddPerson: (personData) => {
            dispatch({type: 'ADD_PERSON', payload: personData})
        }
    })
    )(Form);

export default Form

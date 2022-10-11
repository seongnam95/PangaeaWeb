import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Selector, OptionType } from '../../../UI/atoms/Selector';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Input from '../../../UI/atoms/Input';
import './standard.scss';

const ValidationSchema = Yup.object().shape({});
const standardInitialValues = {
  purpose: '',
  structure: '',
};

export function StandardContract() {
  return (
    <div id="content" className="content">
      <div className="room_info">
        <PropertyForm />
      </div>
    </div>
  );
}

const PropertyForm = () => {
  const purposeOptions = [
    { value: 'purpose_1', label: '철근콘크리트' },
    { value: 'purpose_2', label: '콘크리트' },
    { value: 'purpose_3', label: '연와조' },
  ];

  return (
    <StyledForm>
      <Formik
        initialValues={standardInitialValues}
        validationSchema={ValidationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleSubmit, ...props }) => (
          <Form>
            <Input name="structure" />
            <Field
              name="purpose"
              options={purposeOptions}
              component={Selector}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </StyledForm>
  );
};

const StyledForm = styled.div``;

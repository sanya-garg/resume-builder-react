'use client';
import axios from "axios";
import { useState } from "react"
import { Audio, RotatingLines } from "react-loader-spinner";

export default function Form() {
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        personalDetails: {
            name: "",
            email: "",
            mobile: "",
            linkedln: "",
            github: "",
            skills: ""
        },
        education: {
            college: "",
            degree: "",
            marks: "",
            collegeFrom: "",
            collegeTo: ""
        },
        experience: {
            organisation: "",
            position: "",
            companyFrom: "",
            companyTo: "",
            presentDate: false,
            description: ""
        },
        project: {
            title: "",
            link: "",
            Pdescription: ""
        },
        hobbies: {
            hdescription: ""
        }
    });
    const [formValidation, setFormValidations] = useState({
        personalDetailsError: {
            name: false,
            nameLength: false,
            nameChar: false,
            email: false,
            emailValid: false,
            mobile: false,
            mobileValid: false,
            linkedln: false,
            linkedlnValid: false,
            github: false,
            githubValid: false,
            skills: false
        },
        educationError: {
            college: false,
            collegeValid: false,
            collegeLength: false,
            degree: false,
            degreeValid: false,
            marks: false,
            collegeFrom: false,
            collegeTo: false
        },
        experienceError: {
            organisation: false,
            organisationValid: false,
            position: false,
            companyFrom: false,
            companyTo: false,
            presentDate: false,
            description: false
        },
        projectError: {
            title: false,
            titleValid: false,
            linkValid: false,
            link: false,
            Pdescription: false
        },
        hobbiesError: {
            hdescription: false
        }
    });
    function handleForm(e) {
        if (e.target.name == 'name') {
            setForm({ ...form, personalDetails: { ...form.personalDetails, name: e.target.value } });
            var name = e.target.value;
            const pattern = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, name: true, nameLength: false, nameChar: false } });
            }
            else if (name.length <= 4) {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, nameLength: true, name: false, nameChar: false } });
            }
            else if (!pattern.test(name)) {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, nameLength: false, name: false, nameChar: true } });
            }
            else {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, name: false, nameLength: false, nameChar: false } });
            }
        }
        else if (e.target.name == 'email') {
            setForm({ ...form, personalDetails: { ...form.personalDetails, email: e.target.value } });
            const pattern =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, email: true, emailValid: false } });
            }
            else if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, email: false, emailValid: true } });
            }
            else {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, email: false, emailValid: false } });
            }
        }
        else if (e.target.name == 'mobile') {
            setForm({ ...form, personalDetails: { ...form.personalDetails, mobile: e.target.value } });
            const pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, mobile: true, mobileValid: false } });
            }
            else if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, mobile: false, mobileValid: true } });
            }
            else {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, mobile: false, mobileValid: false } });
            }
        }
        else if (e.target.name == 'linkedln') {
            setForm({ ...form, personalDetails: { ...form.personalDetails, linkedln: e.target.value } });
            const pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, linkedln: true, linkedlnValid: false } });
            }
            else if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, linkedln: false, linkedlnValid: true } });
            }
            else {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, linkedln: false, linkedlnValid: false } });
            }
        }
        else if (e.target.name == 'github') {
            setForm({ ...form, personalDetails: { ...form.personalDetails, github: e.target.value } });
            const pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, github: true, githubValid: false } });
            }
            else if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, github: false, githubValid: true } });
            }
            else {
                setFormValidations({ ...formValidation, personalDetailsError: { ...formValidation.personalDetailsError, github: false, githubValid: false } });
            }
        }
        else if (e.target.name == 'skills') {
            setForm({ ...form, personalDetails: { ...form.personalDetails, skills: e.target.value } });
        }
        else if (e.target.name == 'college') {
            setForm({ ...form, education: { ...form.education, college: e.target.value } });
            const pattern = /^[a-zA-Z]+ ?([a-zA-Z]+){1}/;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, college: true, collegeLength: false, collegeValid: false } });
            }
            else if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, college: false, collegeLength: false, collegeValid: true } });
            }
            else if (e.target.value.length < 10) {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, college: false, collegeLength: true, collegeValid: false } });
            }
            else {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, college: false, collegeLength: false, collegeValid: false } });
            }
        }
        else if (e.target.name == 'degree') {
            setForm({ ...form, education: { ...form.education, degree: e.target.value } });
            const pattern = /^[a-zA-Z]+ ?([a-zA-Z]+){1}/;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, degree: true, degreeValid: false } });
            }
            else if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, degree: false, degreeValid: true } });
            }
            else {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, degree: false, degreeValid: false } });
            }
        }
        else if (e.target.name == 'marks') {
            setForm({ ...form, education: { ...form.education, marks: e.target.value } });
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, marks: true } });
            }
            else {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, marks: false } });
            }
        }
        else if (e.target.name == 'collegeFrom') {
            setForm({ ...form, education: { ...form.education, collegeFrom: e.target.value } });
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, collegeFrom: true } });
            }
            else {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, collegeFrom: false } });
            }
        }
        else if (e.target.name == 'collegeTo') {
            setForm({ ...form, education: { ...form.education, collegeTo: e.target.value } });
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, collegeTo: true } });
            }
            else {
                setFormValidations({ ...formValidation, educationError: { ...formValidation.educationError, collegeTo: false } });
            }
        }
        else if (e.target.name == 'organisation') {
            setForm({ ...form, experience: { ...form.experience, organisation: e.target.value } });
            const pattern = /^[a-zA-Z]+ ?([a-zA-Z]+){1}/;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, organisation: true, organisationValid: false } });
            }
            else if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, organisation: false, organisationValid: true } });
            }
            else {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, organisation: false, organisationValid: false } });
            }
        }
        else if (e.target.name == 'position') {
            setForm({ ...form, experience: { ...form.experience, position: e.target.value } });
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, position: true } });
            }
            else {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, position: false } });
            }
        }
        else if (e.target.name == 'companyFrom') {
            setForm({ ...form, experience: { ...form.experience, companyFrom: e.target.value } });
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, companyFrom: true } });
            }
            else {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, companyFrom: false } });
            }
        }
        else if (e.target.name == 'companyTo') {
            setForm({ ...form, experience: { ...form.experience, companyTo: e.target.value } });
            if (e.target.value == '' && !isActive) {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, companyTo: true } });
            }
            else {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, companyTo: false } });
            }
        }
        else if (e.target.name == 'description') {
            setForm({ ...form, experience: { ...form.experience, description: e.target.value } });
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, description: true } });
            }
            else {
                setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, description: false } });
            }
        }
        else if (e.target.name == 'title') {
            setForm({ ...form, project: { ...form.project, title: e.target.value } });
            const pattern = /^[a-zA-Z]+ ?([a-zA-Z]+){1}/;
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, projectError: { ...formValidation.projectError, title: true, titleValid: false } });
            }
            else if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, projectError: { ...formValidation.projectError, title: false, titleValid: true } });
            }
            else {
                setFormValidations({ ...formValidation, projectError: { ...formValidation.projectError, title: false, titleValid: false } });
            }
        }
        else if (e.target.name == 'link') {
            setForm({ ...form, project: { ...form.project, link: e.target.value } });
            const pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
            if (!pattern.test(e.target.value)) {
                setFormValidations({ ...formValidation, projectError: { ...formValidation.projectError, link: false, linkValid: true } });
            }
            else {
                setFormValidations({ ...formValidation, projectError: { ...formValidation.projectError, link: false, linkValid: false } });
            }
        }
        else if (e.target.name == 'Pdescription') {
            setForm({ ...form, project: { ...form.project, Pdescription: e.target.value } });
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, projectError: { ...formValidation.projectError, Pdescription: true } });
            }
            else {
                setFormValidations({ ...formValidation, projectError: { ...formValidation.projectError, Pdescription: false } });
            }
        }
        else if (e.target.name == 'hdescription') {
            setForm({ ...form, hobbies: { ...form.hobbies, hdescription: e.target.value } });
            if (e.target.value == '') {
                setFormValidations({ ...formValidation, hobbiesError: { ...formValidation.hobbiesError, hdescription: true } });
            }
            else {
                setFormValidations({ ...formValidation, hobbiesError: { ...formValidation.hobbiesError, hdescription: false } });
            }
        }
    }
    function handleSubmit() {
        if (!formValidation.personalDetailsError.name && !formValidation.personalDetailsError.nameChar && !formValidation.personalDetailsError.nameLength && !formValidation.personalDetailsError.email && !formValidation.personalDetailsError.emailValid
            && !formValidation.personalDetailsError.mobile && !formValidation.personalDetailsError.mobileValid && !formValidation.personalDetailsError.github && !formValidation.personalDetailsError.githubValid && !formValidation.personalDetailsError.linkedln
            && !formValidation.personalDetailsError.linkedlnValid && !formValidation.educationError.college && !formValidation.educationError.collegeLength && !formValidation.educationError.collegeValid
            && !formValidation.educationError.collegeFrom && !formValidation.educationError.collegeTo && !formValidation.educationError.degree
            && !formValidation.educationError.degreeValid && !formValidation.experienceError.organisation
            && !formValidation.experienceError.organisationValid && !formValidation.experienceError.position && !formValidation.experienceError.companyTo
            && !formValidation.experienceError.companyFrom && !formValidation.experienceError.description && !formValidation.projectError.title
            && !formValidation.projectError.titleValid && !formValidation.projectError.linkValid
            && !formValidation.projectError.Pdescription && !formValidation.hobbiesError.hdescription) {
            console.log(form);
            setIsLoading(true);
            return axios.post("https://resume-builder-zep3.onrender.com/create-pdf", form)
                .then((r) => {
                    console.log(r.data);
                    if (r.data.message == 'Pdf generated successfully.') {
                        const httpOptions = {
                            responseType: 'blob'
                        };
                        return axios.get("https://resume-builder-zep3.onrender.com/fetch-pdf", httpOptions)
                            .then((r) => {
                                console.log(r.data);
                                setIsLoading(false);
                                const url = window.URL.createObjectURL(new Blob([r.data]));
                                const link = document.createElement("a");
                                link.href = url;
                                // Setting filename received in response
                                link.setAttribute("download", 'Resume.pdf');
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }).catch((error) => {
                                setIsLoading(false);
                                alert('There is an issue while generating PDF');
                            });
                    }
                }).catch((error) => {
                    setIsLoading(false);
                    alert('There is an issue while generating PDF');
                });
        }
    }
    function handlePresentDate(e) {
        setIsActive(!isActive);
        setFormValidations({ ...formValidation, experienceError: { ...formValidation.experienceError, companyTo: false } });
    }
    return (
        <div>
            <section className="container col-lg-8 mx-auto resume-form-section">
                <h3 color="primary" className="mat-h3 page-title mt-4">Let's create your resume!</h3>
                <div className="subtitle-content">
                    <div className="subtitle-text">
                        <div>Fill in the details to get started.</div>
                    </div>
                </div>
                <form>
                    <div>
                        <div>
                            <h5>Personal Details</h5>
                            <hr />
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Name*</label>
                                    <input type="text" name='name' className="form-control" value={form.personalDetails.name} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.personalDetailsError.name &&
                                            <div className="error">
                                                Name is required
                                            </div>}
                                        {formValidation.personalDetailsError.nameLength &&
                                            <div className="error">
                                                Name is must be at least 4 characters long.
                                            </div>}
                                        {formValidation.personalDetailsError.nameChar &&
                                            <div className="error">
                                                Name must contain only characters
                                            </div>}
                                    </div>
                                </div>
                                <div className="mb-3 col">
                                    <label htmlFor="email" className="form-label">Email*</label>
                                    <input type="email" className="form-control" name='email' value={form.personalDetails.email} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.personalDetailsError.email &&
                                            <div className="error">
                                                Email is required
                                            </div>
                                        }
                                        {formValidation.personalDetailsError.emailValid &&
                                            <div className="error" >
                                                Email is not valid
                                            </div >
                                        }
                                    </div>
                                </div >

                                <div className="mb-3 col">
                                    <label htmlFor="mobile" className="form-label">Mobile*</label>
                                    <input type="text" className="form-control" name='mobile' value={form.personalDetails.mobile} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.personalDetailsError.mobile &&
                                            <div className="error">
                                                Mobile is required
                                            </div>}
                                        {formValidation.personalDetailsError.mobileValid &&
                                            <div className="error" >
                                                Mobile is not valid
                                            </div >}
                                    </div >
                                </div >
                            </div >
                            <div className="row">
                                <div className="mb-3 col">
                                    <label htmlFor="linkedln" className="form-label">Linkedln URL*</label>
                                    <input type="text" className="form-control" name='linkedln' value={form.personalDetails.linkedln} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.personalDetailsError.linkedln &&
                                            <div className="error">
                                                Linkedln URL is required
                                            </div>}
                                        {formValidation.personalDetailsError.linkedlnValid &&
                                            <div className="error">
                                                Linkedln URL is not valid
                                            </div>}
                                    </div >
                                </div >
                                <div className="mb-3 col">
                                    <label htmlFor="github" className="form-label">GitHub URL*</label>
                                    <input type="text" className="form-control" name='github' value={form.personalDetails.github} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.personalDetailsError.github &&
                                            <div className="error">
                                                GitHub URL is required
                                            </div>}
                                        {formValidation.personalDetailsError.githubValid &&
                                            <div className="error" >
                                                GitHub URL is not valid
                                            </div >}
                                    </div >
                                </div >
                            </div >
                            <div className="mb-3">
                                <label htmlFor="skills" className="form-label">Skills</label>
                                <textarea className="form-control" rows="3"
                                    placeholder="For eg. Java, React, Angular" name='skills' value={form.personalDetails.skills} onChange={(e) => handleForm(e)}></textarea>
                            </div>
                        </div >
                        <div>
                            <h5>Education</h5>
                            <hr />
                            <div className="row">
                                <div className="mb-3 col">
                                    <label htmlFor="college" className="form-label">College*</label>
                                    <input type="text" className="form-control" name='college' value={form.education.college} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.educationError.college &&
                                            <div className="error">
                                                College is required
                                            </div>}
                                        {formValidation.educationError.collegeLength &&
                                            <div className="error">
                                                College should atleast have 10 or more chars
                                            </div>}
                                        {formValidation.educationError.collegeValid &&
                                            <div className="error">
                                                College is not valid
                                            </div>}
                                    </div >
                                </div >
                                <div className="mb-3 col">
                                    <label htmlFor="degree" className="form-label">Degree*</label>
                                    <input type="email" className="form-control" name='degree' value={form.education.degree} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.educationError.degree &&
                                            <div className="error">
                                                Degree is required
                                            </div>}
                                        {formValidation.educationError.degreeValid &&
                                            <div className="error" >
                                                Degree is not valid
                                            </div >}
                                    </div >
                                </div >
                                <div className="mb-3 col">
                                    <label htmlFor="marks" className="form-label">Percentage/CGPA*</label>
                                    <input type="text" className="form-control" name='marks' value={form.education.marks} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.educationError.marks &&
                                            <div className="error">
                                                Percentage/CGPA is required
                                            </div>}
                                    </div >
                                </div >
                            </div >
                            <div className="row">
                                <div className="mb-3 col">
                                    <label htmlFor="collegeFrom" className="form-label">From*</label>
                                    <input className="form-control" placeholder="yyyy-mm-dd" type="date" name='collegeFrom' value={form.education.collegeFrom} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.educationError.collegeFrom &&
                                            <div className="error">
                                                From Date is required
                                            </div>}
                                    </div>
                                </div >
                                <div className="mb-3 col">
                                    <label htmlFor="collegeTo" className="form-label">To*</label>
                                    <input className="form-control" placeholder="yyyy-mm-dd" type="date" name='collegeTo' value={form.education.collegeTo} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.educationError.collegeTo &&
                                            <div className="error">
                                                To Date is required
                                            </div>}
                                    </div >
                                </div >
                            </div >
                        </div >
                        <div>
                            <h5>Experience</h5>
                            <hr />
                            <div className="row">
                                <div className="mb-3 col">
                                    <label htmlFor="organisation" className="form-label">Organisation*</label>
                                    <input type="text" className="form-control" name='organisation' value={form.experience.organisation} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.experienceError.organisation &&
                                            <div className="error">
                                                Organisation is required
                                            </div>}
                                        {formValidation.experienceError.organisationValid &&
                                            <div className="error">
                                                Organisation is not valid
                                            </div>}
                                    </div>
                                </div >
                                <div className="mb-3 col">
                                    <label htmlFor="position" className="form-label">Position*</label>
                                    <input type="email" className="form-control" name='position' value={form.experience.position} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.experienceError.position &&
                                            <div className="error">
                                                Position is required
                                            </div>}
                                    </div >
                                </div >
                            </div >
                            <div className="row">
                                <div className="mb-3 col">
                                    <label htmlFor="companyFrom" className="form-label">From*</label>
                                    <input className="form-control" placeholder="yyyy-mm-dd" type="date" name='companyFrom' value={form.experience.companyFrom} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.experienceError.companyFrom &&
                                            <div className="error">
                                                From Date is required
                                            </div>}
                                    </div>
                                </div >
                                <div className="mb-3 col">
                                    <label htmlFor="comapanyTo" className="form-label">To*</label>
                                    <input className="form-control" placeholder="yyyy-mm-dd" type="date" disabled={isActive} name='companyTo' value={form.experience.companyTo} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.experienceError.companyTo &&
                                            <div className="error">
                                                To Date is required
                                            </div>}
                                    </div >
                                </div >
                            </div >
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" value={form.experience.presentDate} onChange={(e) => handlePresentDate(e)} />
                                <label htmlFor="presentDate" className="form-label" style={{ marginLeft: '10px' }}>Present Date</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description*</label>
                                <textarea className="form-control" rows="3" name='description' value={form.experience.description} onChange={(e) => handleForm(e)}></textarea>
                                <div>
                                    {formValidation.experienceError.description &&
                                        <div className="error">
                                            Description is required
                                        </div>}
                                </div >
                            </div >
                        </div >
                        <div>
                            <h5>Project</h5>
                            <hr />
                            <div className="row">
                                <div className="mb-3 col">
                                    <label htmlFor="title" className="form-label">Title*</label>
                                    <input type="text" className="form-control" name='title' value={form.project.title} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.projectError.title &&
                                            <div className="error">
                                                Title is required
                                            </div>}
                                        {formValidation.projectError.titleValid &&
                                            <div className="error">
                                                Title is not valid
                                            </div>}
                                    </div>
                                </div >
                                <div className="mb-3 col">
                                    <label htmlFor="link" className="form-label">Link</label>
                                    <input type="text" className="form-control" name='link' value={form.project.link} onChange={(e) => handleForm(e)} />
                                    <div>
                                        {formValidation.projectError.linkValid &&
                                            <div className="error">
                                                Link is not valid
                                            </div>}
                                    </div >
                                </div >
                            </div >
                            <div className="mb-3">
                                <label htmlFor="Pdescription" className="form-label">Description*</label>
                                <textarea className="form-control" rows="3" name='Pdescription' value={form.project.Pdescription} onChange={(e) => handleForm(e)}></textarea>
                                <div>
                                    {formValidation.projectError.Pdescription &&
                                        <div className="error">
                                            Description is required
                                        </div>}
                                </div >
                            </div >
                        </div >
                        <div>
                            <h5>Hobbies/Achievements</h5>
                            <hr />
                            <div className="row">
                                <div className="mb-3">
                                    <label htmlFor="hdescription" className="form-label">Description*</label>
                                    <textarea className="form-control" rows="3" name='hdescription' value={form.hobbies.hdescription} onChange={(e) => handleForm(e)}></textarea>
                                    <div>
                                        {formValidation.hobbiesError.hdescription &&
                                            <div className="error">
                                                Description is required
                                            </div>}
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                    <button className="btn btn-outline-primary calendar" type="submit" onClick={handleSubmit} > Submit</button >
                </form >
                <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={isLoading}
                    />
                </div>
            </section >
        </div>
    )
}
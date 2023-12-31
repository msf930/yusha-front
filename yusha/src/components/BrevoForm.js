import {useState} from "react";
import Swal from 'sweetalert2'

export default function BrevoForm(){

    const [email, setEmail] = useState("");
    const [optIn, setOptIn] = useState(false);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })


const formHandler = (event) => {
    console.log(optIn);
    event.preventDefault();
    fetch("https://api.brevo.com/v3/contacts",
        { method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "api-key": "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",
                "accept": "application/json"
            },
            body: JSON.stringify({
                listIds: [3],
                email: email,
                OPT_IN: optIn ? 1 : 0,
                email_address_check: undefined,
                locale: "en"})
        })
    document.getElementById("sib-form").reset();
    Toast.fire({
        icon: 'success',
        title: 'You are Subscribed!'
    })
}

    return(
        <div className="sib-form brevoForm" style={{textAlign: "left", backgroundColor: "#ECF6FFFF"}}>
            <div id="sib-form-container " className="sib-form-container">
                <div id="error-message" className="sib-form-message-panel" style={{
                    fontSize: 16,
                    textAlign: "center",
                    fontFamily: "&quot Helvetica&quot sans-serif",
                    color: "#661d1d",
                    backgroundColor: "#FFEDED",
                    borderRadius: 3,
                    borderColor: "#ff4949",
                    maxWidth: 540
                }}>
                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                        <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                            <path
                                d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"/>
                        </svg>
                        <span className="sib-form-message-panel__inner-text"> Your subscription could not be saved. Please try again.
                            </span>
                    </div>
                </div>
                <div>

                </div>
                <div id="success-message" className="sib-form-message-panel" style={{
                    fontSize: 16,
                    textAlign: "center",
                    fontFamily: "&quot Helvetica&quot sans-serif",
                    color: "#085229",
                    backgroundColor: "#e7faf0",
                    borderRadius: 3,
                    borderColor: "#13ce66",
                    maxWidth: 540
                }}>
                    <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                        <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                            <path
                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"/>
                        </svg>
                        <span className="sib-form-message-panel__inner-text"> Thanks for signing up for more info about Yusha!
                            </span>
                    </div>
                </div>

                <div id="sib-container" className="sib-container--large sib-container--vertical grid" style={{
                    textAlign: "center",
                    backgroundColor: "#ECF6FFFF",
                    maxWidth: 800,
                    borderRadius: 3,
                    borderWidth: 1,
                    borderColor: "#ECF6FFFF",
                    borderStyle: "solid",
                    direction: "ltr"
                }}>
                    <form id="sib-form" method="POST"
                          // action="https://feb7ebfd.sibforms.com/serve/MUIFAFt_9hZocUp0VDg8kQXJmGQo7lmfoCg79HwEwnnTRABGEDS8anTCFpnPZUxDMBfU6sDpLDubrRHmoHtsjAL_cysSemu2LyTe0Q6WP1Zh5se0XuwXidVPo6hEXpQ_heNaOvTTabkHm9CfZH1bz2zNp8krcT3aMIy56OVycSdpvpQggk08S7foyG2fnDQCEeUp9TtPpone8N04"
                          data-type="subscription"
                           onSubmit={(event) => formHandler(event)}
                    >
                        <div style={{padding: "8 0"}}>
                            <div className="sib-form-block" style={{
                                fontSize: 30,
                                textAlign: "left",
                                fontWeight: 700,
                                fontFamily: "&quot Helvetica&quot sans-serif",
                                color: "#000000",
                                backgroundColor: "transparent"
                            }}><h2>People are at the heart of Yusha!</h2>
                            </div>
                        </div>
                        <div style={{padding: "8 0"}}>
                            <div className="sib-form-block" style={{
                                fontSize: 16,
                                textAlign: "left",
                                fontFamily: "&quot Helvetica&quot sans-serif",
                                color: "#3C4858",
                                backgroundColor: "transparent"
                            }}>
                                <div className="sib-text-form-block">
                                    <p>Join our newsletter to keep up to date with all future releases, product updates,
                                        specials, and news about Yusha!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "8 0"}}>
                            <div className="sib-input sib-form-block">
                                <div className="form__entry entry_block">
                                    <div className="form__label-row">
                                        <label className="entry__label" style={{
                                            fontWeight: 700,
                                            textAlign: "left",
                                            fontSize: 16,
                                            fontFamily: "&quot Helvetica&quot sans-serif",
                                            color: "#3c4858"
                                        }} htmlFor="EMAIL" data-required="*">Enter your email address to subscribe
                                        </label>
                                        <div className="entry__field">
                                            <input className="input " type="text" id="EMAIL" name="EMAIL"
                                                   autoComplete="off" placeholder="yusha@email.com"
                                                   data-required="true" required onChange={(event) => setEmail(event.target.value)}/>
                                        </div>
                                    </div>
                                    <label className="entry__error entry__error--primary" style={{
                                        fontSize: 16,
                                        textAlign: "left",
                                        fontFamily: "&quot Helvetica&quot sans-serif",
                                        color: "#661d1d",
                                        backgroundColor: "#ffeded",
                                        borderRadius: 3,
                                        borderColor: "#ff4949"
                                    }}>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-optin sib-form-block">
                                <div className="form__entry entry_mcq">
                                    <div className="form__label-row ">
                                        <div className="entry__choice" style={{}}>
                                            <label>
                                                <input type="checkbox" className="input_replaced" value="1" id="OPT_IN"
                                                       name="OPT_IN" onClick={() => setOptIn((prev) => !prev)}/>
                                                <span className="checkbox checkbox_tick_positive"
                                                      style={{marginLeft: 0}}>
                                                </span>
                                                <span style={{
                                                    fontSize: 14,
                                                    textAlign: "left",
                                                    fontFamily: "&quot Helvetica&quot sans-serif",
                                                    color: "#3C4858",
                                                    backgroundColor: "transparent"
                                                }}>
                                                    <p>I agree to receive your newsletters and accept the data privacy statement.
                                                    </p>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <label className="entry__error entry__error--primary" style={{
                                        fontSize: 16,
                                        textAlign: "left",
                                        fontFamily: "&quot Helvetica&quot sans-serif",
                                        color: "#661d1d",
                                        backgroundColor: "#ffeded",
                                        borderRadius: 3,
                                        borderColor: "#ff4949"
                                    }}>
                                    </label>
                                    <label className="entry__specification" style={{
                                        fontSize: 12,
                                        textAlign: "left",
                                        fontFamily: "&quot Helvetica&quot  sans-serif",
                                        color: "#8390A4",
                                    }}> You may unsubscribe at any time using the link in our newsletter.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div style={{padding: "8px 0"}}>
                            <div className="sib-form-block" style={{textAlign: "left"}}>
                                <button className="sib-form-block__button sib-form-block__button-with-loader" style={{
                                    fontSize: 16,
                                    textAlign: "left",
                                    fontWeight: "700",
                                    fontFamily: "&quot Helvetica&quot sans-serif",
                                    color: "#FFFFFF",
                                    backgroundColor: "#EE6611",
                                    borderRadius: 3,
                                    borderWidth: 0
                                }}  form="sib-form" type="submit">
                                    <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                                         viewBox="0 0 512 512">
                                        <path
                                            d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                                        />
                                    </svg>
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                        <input type="text" name="email_address_check" value="" className="input--hidden"/>
                        <input type="hidden" name="locale" value="en"/>
                    </form>
                </div>


            </div>

            <div className=" d-lg-block d-none">
                <img src="images/people-are-at.png" className="img-fluid" alt=""/>
            </div>
        </div>
    );
}
import React from 'react'
import './Payment.css';
import { Link } from 'react-router-dom';
const Payment = () => {
  return (
    <div>

<div class="containerPayment">

<form action="">

    <div class="payment-row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="Arfah Ali"/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com"/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality"/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="Islamabad"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="Pakistan"/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src="ASSETS/images/card_img.png" alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="Ms. Arfah Ali"/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234"/>
                </div>
            </div>

        </div>

    </div>

   <Link to='/OrderConfirmation'><input type="submit" value="proceed to checkout" class="submit-btn"/></Link> 

</form>

</div>    


    </div>
  )
}

export default Payment
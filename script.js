document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        const counselorDiv = document.createElement('div');
        counselorDiv.innerHTML = `
        <br>
        <h2>Extra Oppositional Part</h2>
        <div class="l1">
        <div class="form-group">
            <label for="firm-name">Firm Name:</label>
            <input type="text" id="firm-name" name="firm-name">
        </div>
        <div class="form-group">
            <label for="booking-contact-name">Booking Contact Name:</label>
            <input type="text" id="booking-contact-name" name="booking-contact-name"><br>
        </div>
    </div>
    <div class="l1">
        <div class="form-group">
            <label for="phone-number">Phone Number:</label><br>
            <input type="text" id="phone-number" name="phone-number"><br>
        </div>
        <div class="form-group">
            <label for="billing-address">Billing Address:</label><br>
            <input type="text" id="billing-address" name="billing-address"><br>
        </div>
    </div>
    <div class="l1">
        <div class="form-group">
            <label for="zip-postal-code">Zip/Postal Code:</label><br>
            <input type="text" id="zip-postal-code" name="zip-postal-code">
        </div>
        <div class="form-group">
            <label for="country">Country:</label>
            <input type="text" id="country" name="country"><br>
        </div>
    </div>
    <div class="l2">
        <div class="form-group">
            <label for="role">Role:</label><br>
            <input type="text" id="Role"><br>
        </div>
        <div class="form-group">
            <label for="nameofrepresentedclient">Name of Represented Client</label><br> <input type="text"
                id="country" name="country"><br>
        </div>
    </div>

    <div class="l2">
        <div class="form-group">
            <label for="lead-counselor-name">Lead Counsellor Name:</label><br>

            <input type="text" id="lead-counselor-name" name="lead-counselor-name"><br>
        </div>
        <div class="form-group">
            <label for="lead-counselor-email">Email:</label><br> <input type="text" id="lead-counselor-email"
                name="lead-counselor-email"><br>
        </div>
    </div>
    <div id="lead-counselors-list1"></div>
    <div id="add-party"></div>
   

        `;
        document.getElementById('add-party').appendChild(counselorDiv);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-lead-counselor').addEventListener('click', function () {
        const counselorDiv = document.createElement('div');
        counselorDiv.innerHTML = `
        <div class="l2">
        <div class="form-group">
            <label for="lead-counselor-name">Lead Counsellor Name:</label><br>

            <input type="text" id="lead-counselor-name" name="lead-counselor-name"><br>
        </div>
        <div class="form-group">
            <label for="lead-counselor-email">Email:</label><br> <input type="text" id="lead-counselor-email"
                name="lead-counselor-email"><br>
        </div>
    </div>
        `;
        document.getElementById('lead-counselors-list').appendChild(counselorDiv);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-Arbitrator').addEventListener('click', function () {
        const counselorDiv = document.createElement('div');
        counselorDiv.innerHTML = `
        <div class="l1">
    <div class="form-group">
        <label for="textBox">Arbitrator(s)</label>
        <input type="text" id="textBox" name="textBox">
    </div>
    <div class="form-group">
        <br>
        <input type="text" id="textBox" name="textBox" placeholder="email">

    </div>
</div>
        `;
        document.getElementById('Arbitrator-list').appendChild(counselorDiv);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-witnesses').addEventListener('click', function () {
        const counselorDiv = document.createElement('div');
        counselorDiv.innerHTML = `
        <div class="l1">
    <div class="form-group">
        <label for="textBox">Witnesses(s)</label>
        <input type="text" id="textBox" name="textBox">
    </div>
    <div class="form-group">
        <br>
        <input type="text" id="textBox" name="textBox" placeholder="email">

    </div>
    </div>
        `;
        document.getElementById('Witnesses-list').appendChild(counselorDiv);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-lead-counselor1').addEventListener('click', function () {
        const counselorDiv = document.createElement('div');
        counselorDiv.innerHTML = `
        <div class="l2">
        <div class="form-group">
            <label for="lead-counselor-name">Lead Counsellor Name:</label><br>

            <input type="text" id="lead-counselor-name" name="lead-counselor-name"><br>
        </div>
        <div class="form-group">
            <label for="lead-counselor-email">Email:</label><br> <input type="text" id="lead-counselor-email"
                name="lead-counselor-email"><br>
        </div>
    </div>
        `;
        document.getElementById('lead-counselors-list1').appendChild(counselorDiv);
    });
});















function showSegment(segmentId) {
    // Hide all segments
    var segments = document.querySelectorAll('.form-segment');
    segments.forEach(function (segment) {
        segment.classList.remove('active');
    });

    // Show the selected segment
    var selectedSegment = document.getElementById(segmentId);
    if (selectedSegment) {
        selectedSegment.classList.add('active');
    }
}

function toggleQuestion() {
    var additionalQuestion = document.getElementById("m1");
    var toggleSwitch = document.getElementById("t");

    additionalQuestion.style.display = toggleSwitch.checked ? "block" : "none";
}
function toggleQuestion1() {
    var additionalQuestion = document.getElementById("m2");
    var toggleSwitch = document.getElementById("ti");

    additionalQuestion.style.display = toggleSwitch.checked ? "block" : "none";
}
function toggleQuestion2() {
    var additionalQuestion = document.getElementById("m3");
    var toggleSwitch = document.getElementById("a");

    additionalQuestion.style.display = toggleSwitch.checked ? "block" : "none";
}
function toggleQuestion3() {
   
}

function toggleQuestion4() {
    var additionalQuestion = document.getElementById("m5");
    var toggleSwitch = document.getElementById("a2");

    additionalQuestion.style.display = toggleSwitch.checked ? "block" : "none";
}
function toggleQuestion5() {
    var additionalQuestion = document.getElementById("m6");

    var toggleSwitch = document.getElementById("b");

    additionalQuestion.style.display = toggleSwitch.checked ? "block" : "none";

}
function toggleQuestion6() {
    var additionalQuestion = document.getElementById("m7");
    var additionalQuestion1 = document.getElementById("m8");
    var toggleSwitch = document.getElementById("b1");

    additionalQuestion.style.display = toggleSwitch.checked ? "block" : "none";
    additionalQuestion1.style.display = toggleSwitch.checked ? "block" : "none";
}
function toggleQuestion7() {
    var additionalQuestion = document.getElementById("m8");
    var toggleSwitch = document.getElementById("b2");

    additionalQuestion.style.display = toggleSwitch.checked ? "block" : "none";
}
function toggleQuestion8() {
    var additionalQuestion = document.getElementById("l4");
    var toggleSwitch = document.getElementById("l5");

    additionalQuestion.style.display = toggleSwitch.checked ? "block" : "none";
}



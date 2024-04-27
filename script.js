
document.getElementById('interestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let principalEl=document.getElementById('principal')
    let interestEl=document.getElementById('rate')
    let dateEl=document.getElementById('date')
    let count=0
if(principalEl.value===""){
    count+=1
    let principalErrorEl=document.createElement('p')
    principalErrorEl.textContent="*Enter Principal Value"
    document.getElementById('form1').appendChild(principalErrorEl)
}


if(interestEl.value==="" || interestEl.value>100 || interestEl.value<0){
    count+=1
    let interestErrorEl=document.createElement('p')
    interestErrorEl.textContent="*Enter Valid Rate Value"
    document.getElementById('form2').appendChild(interestErrorEl)
}


if(dateEl.value===""){
    count+=1
    let dateErrorEl=document.createElement('p')
    dateErrorEl.textContent="*Choose date"
    document.getElementById('form3').appendChild(dateErrorEl)
}
if(count===0){
    
    
    let days=Math.round((new Date()-new Date(dateEl.value))/(1000*60*60*24));
    
    const principal = parseFloat(principalEl.value);
    
    
    const rate = parseFloat(interestEl.value);

    
    const interest = Math.round((principal * rate * days) / (100*365));
    const totalAmount = principal + interest;
    
    document.getElementById('result').innerHTML = `
    <p>Total Amount in Rupees: Rs. ${totalAmount.toFixed(2)}</p>
        <p>Simple Interest in Rupees: Rs. ${interest.toFixed(2)}</p>
    `;
}
});

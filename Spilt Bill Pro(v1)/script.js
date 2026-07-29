



function CalcualateBill(){
    let TipAmount = parseInt(document.getElementById("TipAmount").value);
    let NumberOfPeople = parseInt(document.getElementById("NumOfPeople").value);
    let BillAmount = parseFloat(document.getElementById("BillAmount").value);
    if(TipAmount < 0){
    console.log("Please Enter a valid number.")
    }else{
        console.log();
    }
    if(BillAmount <= 0 || NumberOfPeople <= 0){
        window.alert("Please Enter valid numbers.");
    }
    //Percentaage calcualtation = (number/100)
    //let tip = (TipAmount/100);

    // Total Bill = Bill + (Bill x Tip%)
    
    TipPenct = BillAmount * (TipAmount/100);
    TotalBill = BillAmount + TipPenct;
    GroupBill = TotalBill.toString();
    let GroupTotal = document.getElementById("GroupTotal").innerText = "$"+ GroupBill;

    // Bill for each person OR Split Bill:
    SplitBill = GroupBill/NumberOfPeople;
    SpiltBillTotal = SplitBill.toString();
    let PersonTotal = document.getElementById("PersonTotal").innerText = "$"+ SpiltBillTotal;

    return 0;
}
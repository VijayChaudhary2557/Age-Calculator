function submit()
{
    let date1 = document.querySelector('.date1st').value;
    let date2 = document.querySelector('.date2nd').value;
     if (date1=="" || date2=="")
        alert('Please Enter date...');
    else
        calculateAgeDifference(date1, date2);
}

function calculateAgeDifference(date1, date2)
{
    let myDate1 = new Date (date1);
    let myDate2 = new Date (date2);
    console.log(myDate1, myDate2);

    let d1 = myDate1.getDate();
    let d2 = myDate2.getDate();

    let m1 = myDate1.getMonth();
    let m2 = myDate2.getMonth();

    let y1 = myDate1.getFullYear();
    let y2 = myDate2.getFullYear();

    let Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1>d2)
    {
        d2 = d2 + Month[m2];
        m2 = m2-1;
    }
    if (m1>m2)
    {
        m2 = m2 + 12;
        y2 = y2-1;
    }

    let d = Math.abs(d2 - d1);
    let m = Math.abs(m2 - m1);
    let y = Math.abs(y2 - y1);

    let output = document.querySelector(".output");
    output.textContent = y + "Years " + m + "Months " + d + "Days ";
}
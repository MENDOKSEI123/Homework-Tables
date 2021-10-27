function isEven(s)
{
    let l = s.length;

    // Loop to traverse
    // number from LSB
    let dotSeen = false;
    for (let i = l - 1; i >= 0; i--)
    {

        // We ignore trailing
        // 0s after dot
        if (s[i] == '0' && dotSeen == false)

        {
            continue;


        }
        // If it is '.' we will
        // check next digit and it
        // means decimal part is
        // traversed.
        if (s[i] == '.')
        {
            dotSeen = true;
            continue;
        }

        // If digit is divisible by 2
        // means even number.
        if ((s[i] - '0') % 2 == 0)
        {
            return true;
        }


        return false;
    }
}
function squareroot()
{
    let rowelement;
document.getSelection()
    rowelement = document.getElementById("row1").innerHTML;
    let rt = Math.sqrt(rowelement);
    let rtr = Math.round(rt*100)/100;
    document.getElementById("root").style.display = "block";
    let el= document.getElementById("root");
    el.textContent = `${rtr}`;
    if(rtr % 2 == 0)
    {
        document.getElementById("odeven");
        let ode = document.getElementById("odeven");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven");
        let ode = document.getElementById("odeven");
        ode.textContent=`Odd`
    }


}
function squareroot2()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row2").innerHTML;
    let rt = Math.sqrt(rowelement);
    let rtr = Math.round(rt*100)/100;
    document.getElementById("root2").style.display = "block";
    let el= document.getElementById("root2");
    el.textContent = `${rtr}`;
    if(rtr % 2 == 0)
    {
        document.getElementById("odeven2");
        let ode = document.getElementById("odeven2");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven2");
        let ode = document.getElementById("odeven2");
        ode.textContent=`Odd`
    }


}
function squareroot3()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row3").innerHTML;
    let rt = Math.sqrt(rowelement);
    let rtr = Math.round(rt*100)/100;
    document.getElementById("root3").style.display = "block";
    let el= document.getElementById("root3");
    el.textContent = `${rtr}`;
    if(isEven(rtr))
    {
        document.getElementById("odeven3");
        let ode = document.getElementById("odeven3");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven3n");
        let ode = document.getElementById("odeven3");
        ode.textContent=`Odd`
    }


}
function squareroot4()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row4").innerHTML;
    let rt = Math.sqrt(rowelement);
    Math.round((rt*100)/100);
    document.getElementById("root4").style.display = "block";
    let el= document.getElementById("root4");
    el.textContent = `${rt}`;
    if(rt % 2 == 0)
    {
        document.getElementById("odeven4");
        let ode = document.getElementById("odeven4");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven4");
        let ode = document.getElementById("odeven4");
        ode.textContent=`Odd`
    }


}
function squareroot5()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row5").innerHTML;
    let rt = Math.sqrt(rowelement);
    let rtr = Math.round(rt*100)/100;

    document.getElementById("root5").style.display = "block";
    let el= document.getElementById("root5");
    el.textContent = `${rtr}`;
    if(!isEven(rtr))
    {
        document.getElementById("odeven5");
        let ode = document.getElementById("odeven5");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven5");
        let ode = document.getElementById("odeven5");
        ode.textContent=`Odd`
    }


}
function squareroot6()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row6").innerHTML;
    let rt = Math.sqrt(rowelement);
    let rtr = Math.round(rt*100)/100;
    document.getElementById("root6").style.display = "block";
    let el= document.getElementById("root6");
    el.textContent = `${rtr}`;
    if(!isEven(rtr))
    {
        document.getElementById("odeven6");
        let ode = document.getElementById("odeven6");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven6");
        let ode = document.getElementById("odeven6");
        ode.textContent=`Odd`
    }


}
function squareroot7()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row7").innerHTML;
    let rt = Math.sqrt(rowelement);
    let rtr = Math.round(rt*100)/100;
    document.getElementById("root7").style.display = "block";
    let el= document.getElementById("root7");
    el.textContent = `${rtr}`;
    if(!isEven(rtr))
    {
        document.getElementById("odeven7");
        let ode = document.getElementById("odeven7");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven7");
        let ode = document.getElementById("odeven7");
        ode.textContent=`Odd`
    }


}
function squareroot8()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row8").innerHTML;
    let rt = Math.sqrt(rowelement);
    let rtr = Math.round(rt*100)/100;
    document.getElementById("root8").style.display = "block";
    let el= document.getElementById("root8");
    el.textContent = `${rtr}`;
    if(!isEven(rtr))
    {
        document.getElementById("odeven8");
        let ode = document.getElementById("odeven8");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven8");
        let ode = document.getElementById("odeven8");
        ode.textContent=`Odd`
    }


}
function squareroot9()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row9").innerHTML;
    let rt = Math.sqrt(rowelement);
    Math.round((rt*100)/100);
    document.getElementById("root9").style.display = "block";
    let el= document.getElementById("root9");
    el.textContent = `${rt}`;
    if(rt % 2 == 0)
    {
        document.getElementById("odeven9");
        let ode = document.getElementById("odeven9");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven9");
        let ode = document.getElementById("odeven9");
        ode.textContent=`Odd`
    }


}
function squareroot10()
{
    let rowelement;
    document.getSelection()
    rowelement = document.getElementById("row10").innerHTML;
    let rt = Math.sqrt(rowelement);
    let rtr = Math.round(rt*100)/100;
    document.getElementById("root10").style.display = "block";
    let el= document.getElementById("root10");
    el.textContent = `${rtr}`;
    if(rtr % 2 == 0)
    {
        document.getElementById("odeven10");
        let ode = document.getElementById("odeven10");
        ode.textContent=`Even`
    }
    else
    {
        document.getElementById("odeven10");
        let ode = document.getElementById("odeven10");
        ode.textContent=`Odd`
    }


}
function isEven(s)
{
    let l = s.length;

    // Loop to traverse
    // number from LSB
    let dotSeen = false;
    for (let i = l - 1; i >= 0; i--)
    {

        // We ignore trailing
        // 0s after dot
        if (s[i] == '0' && dotSeen == false)

        {
            continue;


        }
        // If it is '.' we will
        // check next digit and it
        // means decimal part is
        // traversed.
        if (s[i] == '.')
        {
            dotSeen = true;
            continue;
        }

        // If digit is divisible by 2
        // means even number.
        if ((s[i] - '0') % 2 == 0)
        {
            return true;
        }


        return false;
    }
}


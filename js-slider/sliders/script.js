let item= document.getElementById('slides').getElementsByClassName("cards");
let btn=document.getElementById('footer_btn').getElementsByClassName("ftr_btn");
let next=0;
let prev=0;
let totallength=item.length;
let prev_btn=0;
nextslide=()=>
{
    if(next<totallength-1)
    {
       item[prev].style.display='none';
       next++;
       item[next].style.display='block';
       prev=next;
    }
    buttoncolor(next);
    buttoncheck();
}
prevslide=()=>
 {
    if(prev>0){
         item[next].style.display='none';
         prev=prev-1;
        next=prev;
        item[prev].style.display='block';
    }
    buttoncheck();
    buttoncolor(next);
 }
 buttonmove=(id)=>
{
    let index = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));
    item[next].style.display='none';
    item[prev].style.display='none';
    item[index].style.display='block';
    next=index;
    prev=index;
    buttoncheck();
    buttoncolor(index);
}
 buttoncheck=()=>
 {
     (next==item.length-1)?document.getElementById('next_btn').disabled=true:document.getElementById('next_btn').disabled=false;
      (prev==0)?document.getElementById('prev_btn').disabled=true:document.getElementById('prev_btn').disabled=false;
 }
 buttoncolor=(index)=>
 {
     btn[prev_btn].style.color='#00FF00';
     btn[index].style.color='red';
     prev_btn=index;
 }
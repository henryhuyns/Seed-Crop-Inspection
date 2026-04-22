function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62V7qGolx3n":
        Script1();
        break;
      case "5YNr2SEIcxn":
        Script2();
        break;
      case "5qUpRBJBxAy":
        Script3();
        break;
      case "5wXJoVwRexx":
        Script4();
        break;
      case "5xyw8vIBQMT":
        Script5();
        break;
      case "69tyNc4M7KR":
        Script6();
        break;
      case "6RnKN7VIuru":
        Script7();
        break;
      case "5nz8S9aGpHQ":
        Script8();
        break;
      case "6YBASNllrOh":
        Script9();
        break;
      case "5h5rTQ1dRkm":
        Script10();
        break;
      case "6K3p6LeXJhA":
        Script11();
        break;
      case "6JaiMLE7aCg":
        Script12();
        break;
      case "5lKjM0fZS0b":
        Script13();
        break;
      case "65lH2xJgbtx":
        Script14();
        break;
      case "6ZieWleeKDb":
        Script15();
        break;
      case "6h3erfs7iNR":
        Script16();
        break;
      case "63bv9tte2zT":
        Script17();
        break;
      case "6pSNXGkoJeT":
        Script18();
        break;
      case "6koWe3PJe2a":
        Script19();
        break;
      case "5wSqFcMCwvm":
        Script20();
        break;
      case "659VhZSE4QD":
        Script21();
        break;
      case "5XnOWBNEboX":
        Script22();
        break;
      case "5nEr3oGDfSc":
        Script23();
        break;
      case "6mI39rKWiGZ":
        Script24();
        break;
      case "5kOMGEiH939":
        Script25();
        break;
      case "5VHTAjnFy1w":
        Script26();
        break;
      case "6lKQDWd42bQ":
        Script27();
        break;
      case "6pGSjf2mWck":
        Script28();
        break;
      case "6E40Bmbme1z":
        Script29();
        break;
      case "5riacklLHIS":
        Script30();
        break;
      case "5fY2zGAw8u1":
        Script31();
        break;
      case "6YMbZVRamjO":
        Script32();
        break;
      case "5dg9lFwgina":
        Script33();
        break;
      case "6MLeunwJGPN":
        Script34();
        break;
      case "6d9gieeEwBa":
        Script35();
        break;
      case "6k9A6bcssNy":
        Script36();
        break;
      case "5VniNY8rhOz":
        Script37();
        break;
      case "6RAGCBnMs94":
        Script38();
        break;
      case "60opROBpFMs":
        Script39();
        break;
      case "6Vnkgj9teo9":
        Script40();
        break;
      case "6WU8xd1jUc6":
        Script41();
        break;
      case "5iZL9juVheh":
        Script42();
        break;
      case "5WGt1ztsYmg":
        Script43();
        break;
      case "6OVc43d4ckj":
        Script44();
        break;
      case "6qzdNJhgEEw":
        Script45();
        break;
      case "617BdNSWsi6":
        Script46();
        break;
      case "5W5js5orKWp":
        Script47();
        break;
      case "6PYC1vztQr9":
        Script48();
        break;
      case "5ubhgYA1OKM":
        Script49();
        break;
      case "5Vfu05bwciJ":
        Script50();
        break;
      case "5qcBIMqxc0s":
        Script51();
        break;
      case "5xaJFaWYGMA":
        Script52();
        break;
      case "6Gf69YcrQC6":
        Script53();
        break;
      case "5jHM4ElVU8k":
        Script54();
        break;
      case "5V4klbkxHfG":
        Script55();
        break;
      case "61eVrHu3VLS":
        Script56();
        break;
      case "5tfPqEWkEa3":
        Script57();
        break;
      case "6FXwyYTZ0sF":
        Script58();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6TkC8TNZEEh');
const duration = 750;
const easing = 'ease-out';
const id = '6C4FsW1lnRv';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5xetXGv4os4');
const duration = 750;
const easing = 'ease-out';
const id = '6aSY1tj2cW4';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6fU7dtsXll5');
const duration = 750;
const easing = 'ease-out';
const id = '6q3BDeLMK05';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('67gG2aRCje6');
const duration = 750;
const easing = 'ease-out';
const id = '6mMfVRCJs5w';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5eOjSYNCLVe');
const duration = 750;
const easing = 'ease-out';
const id = '6Mwvy01tJGu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6pMNRLsMgWS');
const duration = 750;
const easing = 'ease-out';
const id = '6K4Yzw4nKgh';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5X0WMS9TeH8');
const duration = 750;
const easing = 'ease-out';
const id = '6P2dodEB1bO';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('5zCZcst54JM');
const duration = 750;
const easing = 'ease-out';
const id = '6bvJAqTjreH';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('64D6iCBqvh1');
const duration = 750;
const easing = 'ease-out';
const id = '5buC0O4SkGL';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('68psX9g7O97');
const duration = 750;
const easing = 'ease-out';
const id = '66MVCTuJVHt';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};

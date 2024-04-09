

function distanceFromHqInBlocks(blocks) {
    const hq = 42; 
    return Math.abs(blocks - hq);
    
  }
  
  
  const distance = distanceFromHqInBlocks(50);
  console.log(distance); 


  
  
  function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; 
    return distanceFromHqInBlocks(blocks) * blockInFeet;
  }


function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264;
    return Math.abs(startBlock - endBlock) * blockInFeet;
  }

  

function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  

  

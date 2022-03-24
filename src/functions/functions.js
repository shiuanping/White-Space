export const showScroll = (status) => {
  if(status){
    document.body.style.overflow = 'unset';
    return;
  }
  document.body.style.overflow = 'hidden';
}
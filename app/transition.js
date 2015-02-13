export default function(){
  this.transition(
    this.toRoute('index'),
    this.use('fade')
  );
  this.transition(
    this.toRoute('modelYear'),
    this.use('fade')
  );
}

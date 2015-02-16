export default function(){
  this.transition(
    this.toRoute('index'),
    this.use('fade', {duration: 5000})
  );
  this.transition(
    this.toRoute('model-year'),
    this.use('fade', {duration: 5000})
  );
}

import alt from './alt.js';



class RideActions {
  constructor() {
    this.generateActions(
      'create',
      'read',
      'update',
      'delete'
    );
  }
}





export default alt.generateActions('create', 'read', 'update', 'delete');

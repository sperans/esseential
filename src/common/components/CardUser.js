import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import styles from '../style.css';


export default class CardUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }


  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Ljubljana"
          titleStyle={{
          fontWeight: 'bold',
          }}
          subtitle="Koper"
          subtitleStyle={{
            color: '#F97F85',
            fontWeight: 'bold',
            fontSize: '1.4em',
          }}
          avatar="http://lorempixel.com/100/100/nature/"
          actAsExpander={true}
          showExpandableButton={true}>
          <span className={styles.price}>10 €</span>
          <div>
          <span className={styles.date}>Pon 16 April</span>
          <span className={styles.time}>17.30</span>
          <span className={styles.user}>Miha Miklavčič</span>
          </div>
        </CardHeader>
        <CardTitle title="Miha Miklavčič" subtitle="Driver Since 2016" expandable={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardTitle title="VW Golf" subtitle="Black 2008" expandable={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions expandable={true}>
          <FlatButton label="Reserve" />
          <FlatButton label="Close" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}

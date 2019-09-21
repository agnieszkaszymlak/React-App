var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        <div className= {'contactItem'}>
            <img className={'contactImage'} src= {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiasajo6RFSTR2RkHQrezDFvJ9QY85uHTkci7cpPof5hZSvuiq7g'}>
            <p className={'contactLabel'}>
                Imię: {this.props.item.firstName}
            </p>
            /*<p className={'contactLabel'}>
                Nazwisko: {this.props.item.lastName}
            </p>
            <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
                {this.props.item.email}
            </a>*/
        </div>
    )
  },
});
var React = require('react');
var cx = require('classnames');

var SingleValue = React.createClass({
	propTypes: {
		placeholder: React.PropTypes.string,       // this is default value provided by React-Select based component
		value: React.PropTypes.object              // selected option
	},
	render: function () {
		var selectPlaceholderClasses = cx(
			'fz2 csec whsnw ovh tove',
			{
				'csec50': !this.props.value,
				'csec': this.props.value
			}
		)
		return (
			<div className={selectPlaceholderClasses}>{this.props.placeholder}</div>
		);
	}
});

module.exports = SingleValue

var React = require('react');
var cx = require('classnames');

var SingleValue = React.createClass({
	propTypes: {
		placeholder: React.PropTypes.string,       // this is default value provided by React-Select based component
		value: React.PropTypes.object              // selected option
	},
	render: function() {
		var selectPlaceholderClasses = cx(
			'pl1/2', 'pr2',
			'fz2',
			'posa',
			'ovh',
			'l0', 't0', 'r0',
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

module.exports = SingleValue;

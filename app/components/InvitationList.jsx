class InvitationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { invitedPeople: this.props.initiallyInvited };
  }

  personUniqueID(person) {
    return ['person', person.id].join('_');
  }

  render() {
    let invitedPeople = [];
    this.state.invitedPeople.forEach(person => {
      let id = this.personUniqueID(person);
      invitedPeople.push(<InvitedPerson ref={id} key={id} person={person} />);
    });

    return (
      <div className='invitation-list-container'>
        <ul ref='list' className='invitation-list'>
          {invitedPeople}
        </ul>
      </div>
    );
  }
}

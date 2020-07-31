import React, {Fragment} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

export default function App() {
  //hooks
  // const [formOpen, setFormOpen] = useState(false);
  // const [selectedEvent, setSelectedEvent] = useState(null);

  // function handleSelectEvent(event) {
  //   setSelectedEvent(event);
  //   setFormOpen(true);
  // }

  // function handleCreateFormOpen() {
  //   setSelectedEvent(null);
  //   setFormOpen(true);
  // }

  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavBar/>
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path={['/createEvent','/manage/:id']} component={EventForm} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
}




// <Container className="main">
//         <EventDashboard
//           formOpen={formOpen}
//           setFormOpen={setFormOpen}
//           selectEvent={handleSelectEvent}
//           selectedEvent={selectedEvent}
//         />
//       </Container>
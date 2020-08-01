import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ConversationList from "../components/ConversationList";
import Box from '@material-ui/core/Box';
import ConversationListHeader from "../components/ConversationListHeader";
import ConversationBox from "../components/ConversationBox";
import {connect} from "react-redux";
import EmptyConversationBox from "../components/EmptyConversationBox";

function App(props) {
  return (
      <Container maxWidth="lg">
          <Grid container alignItems="center" style={{height: '100vh'}}>
              <Grid item xs={12} sm={4}>
                  <Box border={1} style={{height: 600}}>
                      <ConversationListHeader/>
                      <ConversationList/>
                  </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                  <Box border={1} borderLeft={0} style={{height: 600}}>
                      {props.selected ? <ConversationBox/> : <EmptyConversationBox/>}
                  </Box>
              </Grid>
          </Grid>
      </Container>
  );
}

const mapStateToProps = state => ({
    selected: state.MessagesReducer.selected,
});

export default connect(mapStateToProps, null)(App);

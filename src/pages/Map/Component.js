import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tooltip from "react-tooltip";

import WorldMap, { Settings } from 'components/WorldMap';
import Loading from 'components/Loading';

import { useAPI } from 'api';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100% - 72px)',
    'margin-left': 20,
    'margin-right': 20,
    'margin-top': 20,
    overflow: 'hidden',
  },
}));

export default function Map() {
  const [setting, setSetting] = useState('confirmed');
  const [tooltipContent, setTooltipContent] = useState('');
  const [covidData, isCovidDataLoading] = useAPI('/confirmed');
  const classes = useStyles();


  const handleSettingsChange = event => {
    setSetting(event.target.value);
  };

  return (
    <Paper className={classes.root}>
      {
        isCovidDataLoading
          ? <Loading />
          : (
            <div>
              <Settings value={setting} onChange={handleSettingsChange} />
              <WorldMap covidData={covidData} setting={setting} setTooltipContent={setTooltipContent} />
              <Tooltip>{tooltipContent}</Tooltip>
            </div>
          )
      }
    </Paper>
  );
}
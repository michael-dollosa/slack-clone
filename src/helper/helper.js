export const channelList = (channels) => {
  const destructureChannelsObject = channels.data.data
  const channelsArray = destructureChannelsObject.map(channel => channel.name)
  return channelsArray
}

export const parseDateTime = (data) => {
  const dateTime = new Date(data)
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //create object to return
  const formattedDateTime = {
    parsedDate: dateTime.toLocaleDateString("en-US"),
    parsedTime: dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  }

  return formattedDateTime
}

export const captalizeWord = (data) => {
  return data.charAt(0).toUpperCase() + data.slice(1);
}
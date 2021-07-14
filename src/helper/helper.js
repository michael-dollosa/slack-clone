export const channelList = (channels) => {
  const destructureChannelsObject = channels.data.data
  const channelsArray = destructureChannelsObject.map(channel => channel.name)
  return channelsArray
}

export const parseDateTime = (data) => {
  const dateTime = new Date(data)
  //create object to return
  const formattedDateTime = {
    parsedDate: dateTime.toLocaleDateString,
    parsedTime: dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  }

  return formattedDateTime
}
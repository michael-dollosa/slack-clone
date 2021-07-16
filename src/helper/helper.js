export const channelList = (channels) => {
  const destructureChannelsObject = channels.data.data
  const channelsArray = destructureChannelsObject.map(channel => channel.name)
  return channelsArray
}

export const captalizeWord = (data) => {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

export const formatEmail = (email) => {
  return email.split("@")[0]
}
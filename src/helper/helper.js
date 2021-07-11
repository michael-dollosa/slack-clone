export const channelList = (channels) => {
  const destructureChannelsObject = channels.data.data
  const channelsArray = destructureChannelsObject.map(channel => channel.name)
  return channelsArray
}
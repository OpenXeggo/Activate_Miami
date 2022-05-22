import {
  CancelStream as CancelStreamEvent,
  CreateStream as CreateStreamEvent,
  WithdrawFromStream as WithdrawFromStreamEvent
} from "../generated/Xeggo/Xeggo"
import {
  CancelStream,
  CreateStream,
  WithdrawFromStream
} from "../generated/schema"

export function handleCancelStream(event: CancelStreamEvent): void {
  let entity = new CancelStream(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.streamId = event.params.streamId
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.senderBalance = event.params.senderBalance
  entity.recipientBalance = event.params.recipientBalance
  entity.save()
}

export function handleCreateStream(event: CreateStreamEvent): void {
  let entity = new CreateStream(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.streamId = event.params.streamId
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.deposit = event.params.deposit
  entity.tokenAddress = event.params.tokenAddress
  entity.startTime = event.params.startTime
  entity.stopTime = event.params.stopTime
  entity.save()
}

export function handleWithdrawFromStream(event: WithdrawFromStreamEvent): void {
  let entity = new WithdrawFromStream(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.streamId = event.params.streamId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}
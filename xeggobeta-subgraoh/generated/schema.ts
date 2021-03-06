// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CancelStream extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("streamId", Value.fromBigInt(BigInt.zero()));
    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("recipient", Value.fromBytes(Bytes.empty()));
    this.set("senderBalance", Value.fromBigInt(BigInt.zero()));
    this.set("recipientBalance", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CancelStream entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save CancelStream entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("CancelStream", id.toString(), this);
    }
  }

  static load(id: string): CancelStream | null {
    return changetype<CancelStream | null>(store.get("CancelStream", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get streamId(): BigInt {
    let value = this.get("streamId");
    return value!.toBigInt();
  }

  set streamId(value: BigInt) {
    this.set("streamId", Value.fromBigInt(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get senderBalance(): BigInt {
    let value = this.get("senderBalance");
    return value!.toBigInt();
  }

  set senderBalance(value: BigInt) {
    this.set("senderBalance", Value.fromBigInt(value));
  }

  get recipientBalance(): BigInt {
    let value = this.get("recipientBalance");
    return value!.toBigInt();
  }

  set recipientBalance(value: BigInt) {
    this.set("recipientBalance", Value.fromBigInt(value));
  }
}

export class CreateStream extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("streamId", Value.fromBigInt(BigInt.zero()));
    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("recipient", Value.fromBytes(Bytes.empty()));
    this.set("deposit", Value.fromBigInt(BigInt.zero()));
    this.set("tokenAddress", Value.fromBytes(Bytes.empty()));
    this.set("startTime", Value.fromBigInt(BigInt.zero()));
    this.set("stopTime", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CreateStream entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save CreateStream entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("CreateStream", id.toString(), this);
    }
  }

  static load(id: string): CreateStream | null {
    return changetype<CreateStream | null>(store.get("CreateStream", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get streamId(): BigInt {
    let value = this.get("streamId");
    return value!.toBigInt();
  }

  set streamId(value: BigInt) {
    this.set("streamId", Value.fromBigInt(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value!.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get stopTime(): BigInt {
    let value = this.get("stopTime");
    return value!.toBigInt();
  }

  set stopTime(value: BigInt) {
    this.set("stopTime", Value.fromBigInt(value));
  }
}

export class WithdrawFromStream extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("streamId", Value.fromBigInt(BigInt.zero()));
    this.set("recipient", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WithdrawFromStream entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save WithdrawFromStream entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("WithdrawFromStream", id.toString(), this);
    }
  }

  static load(id: string): WithdrawFromStream | null {
    return changetype<WithdrawFromStream | null>(
      store.get("WithdrawFromStream", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get streamId(): BigInt {
    let value = this.get("streamId");
    return value!.toBigInt();
  }

  set streamId(value: BigInt) {
    this.set("streamId", Value.fromBigInt(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}
"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  Form,
  Modal,
  Surface,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function EditModal({ destination }) {
  const {
    destinationName,
    imageUrl,
    country,
    category,
    duration,
    price,
    description,
    departureDate,
  } = destination;

  

  return (
    <Modal>
      <Button
        variant="outline"
       
      >
        <BiEdit /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
         <Modal.Dialog className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Edit Destination</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form className="p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>
                        <Input className="rounded-xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField
                      defaultValue={country}
                      name="country"
                      isRequired
                    >
                      <Label>Country</Label>
                      <Input className="rounded-xl" />
                      <FieldError />
                    </TextField>

                    {/* Category */}
                    <Select
                      name="category"
                      defaultValue={category}
                      isRequired
                      className="w-full"
                    >
                      <Label>Category</Label>

                      <Select.Trigger className="rounded-xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Beach">Beach</ListBox.Item>
                          <ListBox.Item id="Mountain">Mountain</ListBox.Item>
                          <ListBox.Item id="City">City</ListBox.Item>
                          <ListBox.Item id="Adventure">Adventure</ListBox.Item>
                          <ListBox.Item id="Cultural">Cultural</ListBox.Item>
                          <ListBox.Item id="Luxury">Luxury</ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* Price */}
                    <TextField
                      defaultValue={String(price)}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input type="number" className="rounded-xl" />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input className="rounded-xl" />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input type="url" className="rounded-xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg"
                  >
                    Save
                  </Button>
                </Form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
           
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
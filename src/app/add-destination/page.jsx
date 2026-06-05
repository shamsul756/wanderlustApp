"use client"
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
} from "@heroui/react";

const AddDestinationPage = () => {
  const onSubmit = async(e)=>{
    e.preventDefault() 
    const formData = new FormData(e.currentTarget)
    const destination = Object.fromEntries(formData.entries())
 

 const res = await fetch("http://localhost:8000/destinations", {
  method: "POST",
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(destination)
})
    const data = await res.json();
    console.log(data);


  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8">
            <h1 className="text-4xl font-bold text-white">
              Add New Destination
            </h1>
            <p className="text-cyan-100 mt-2 text-lg">
              Create a beautiful travel package for your customers.
            </p>
          </div>

          {/* Form */}
          <Form onSubmit={onSubmit} className="p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="destinationName" isRequired>
                  <Label>Destination Name</Label>
                  <Input
                    placeholder="Bali Paradise"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label>Country</Label>
                <Input
                  placeholder="Indonesia"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>

              {/* Category */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>

                  <Select.Trigger className="rounded-xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Beach">
                        Beach
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Mountain
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="City" textValue="City">
                        City
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Adventure
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cultural
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField
                  name="departureDate"
                  type="date"
                  isRequired
                >
                  <Label>Departure Date</Label>
                  <Input
                    type="date"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Add Destination
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddDestinationPage;


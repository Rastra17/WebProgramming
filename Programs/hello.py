import tkinter as tk


class App:
    def __init__(self, master):
        self.master = master
        self.label = tk.Label(self.master, text="Enter your name:")
        self.label.pack()
        self.entry = tk.Entry(self.master, width=25, borderwidth=5)
        self.entry.pack()
        self.button = tk.Button(
            self.master, text="Confirm", command=self.click)
        self.button.pack()

    def click(self):
        self.show = tk.Label(self.master, text=self.entry.get())
        self.show.pack()


Trial = tk.Tk()
run = App(Trial)
Trial.mainloop()

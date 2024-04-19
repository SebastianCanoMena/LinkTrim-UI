export default function SignUp() {


    return(

            <form className="d-flex flex-column ">
                <h4 className="mt-4">First Name</h4>
                <input type="text" className="py-1 w-50 border border-2 rounded mt-2"/>
                <h4 className="mt-4">Last Name</h4>
                <input type="text" className="py-1 w-50 border border-2 rounded mt-2"/>
                <h4 className="mt-4">Email</h4>
                <input type="text" className="py-1 w-50 border border-2 rounded mt-2"/>
                <h4 className="mt-4">Password</h4>
                <input type="text" className="py-1 w-50 border border-2 rounded mt-2"/>
                <h4 className="mt-4">Password</h4>
                <input type="text" className="py-1 w-50 border border-2 rounded mt-2"/>
                <br/>
                <button className="w-50 rounded mt-4 mb-4 py-1">Submit</button>
            </form>
    )
} 